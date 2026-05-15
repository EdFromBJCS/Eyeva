function getMonthDay(now) {
    return {
        month: now.getMonth() + 1,
        day: now.getDate(),
    };
}

const SEASON_STORAGE_KEY = 'eyevaSeasonOverride';

function startOfDay(date) {
    const value = new Date(date);
    value.setHours(0, 0, 0, 0);
    return value;
}

function isBetweenInclusive(now, start, end) {
    const value = startOfDay(now).getTime();
    return value >= startOfDay(start).getTime() && value <= startOfDay(end).getTime();
}

function getNthWeekdayOfMonth(year, monthZeroBased, weekday, nth) {
    const first = new Date(year, monthZeroBased, 1);
    const firstWeekday = first.getDay();
    const offset = (7 + weekday - firstWeekday) % 7;
    const dayOfMonth = 1 + offset + (nth - 1) * 7;
    return new Date(year, monthZeroBased, dayOfMonth);
}

function getWeekendBoundsAround(anchorDate) {
    const anchor = startOfDay(anchorDate);
    const day = anchor.getDay();
    const saturday = new Date(anchor);
    const sunday = new Date(anchor);

    saturday.setDate(anchor.getDate() - ((day + 1) % 7));
    sunday.setDate(saturday.getDate() + 1);

    return { saturday, sunday };
}

function getEasterSunday(year) {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;

    return new Date(year, month - 1, day);
}

function getBlackFriday(year) {
    const thanksgiving = getNthWeekdayOfMonth(year, 10, 4, 4);
    const blackFriday = new Date(thanksgiving);
    blackFriday.setDate(thanksgiving.getDate() + 1);
    return blackFriday;
}

function getWeekBoundsFromDate(anchorDate) {
    const anchor = startOfDay(anchorDate);
    const day = anchor.getDay();
    const mondayOffset = day === 0 ? -6 : 1 - day;
    const monday = new Date(anchor);
    const sunday = new Date(anchor);

    monday.setDate(anchor.getDate() + mondayOffset);
    sunday.setDate(monday.getDate() + 6);

    return { monday, sunday };
}

function resolveSeasonFromDate(now) {
    const { month, day } = getMonthDay(now);
    const year = now.getFullYear();

    if (month === 2 && day === 14) {
        return 'valentines';
    }

    if (month === 3 && day === 17) {
        return 'stpatricks';
    }

    const easterSunday = getEasterSunday(year);
    const goodFriday = new Date(easterSunday);
    goodFriday.setDate(easterSunday.getDate() - 2);
    if (isBetweenInclusive(now, goodFriday, easterSunday)) {
        return 'easter-weekend';
    }

    const mothersDay = getNthWeekdayOfMonth(year, 4, 0, 2);
    const mothersWeekend = getWeekendBoundsAround(mothersDay);
    if (isBetweenInclusive(now, mothersWeekend.saturday, mothersWeekend.sunday)) {
        return 'mothers-day-weekend';
    }

    const fathersDay = getNthWeekdayOfMonth(year, 5, 0, 3);
    const fathersWeekend = getWeekendBoundsAround(fathersDay);
    if (isBetweenInclusive(now, fathersWeekend.saturday, fathersWeekend.sunday)) {
        return 'fathers-day-weekend';
    }

    const independenceDay = new Date(year, 6, 4);
    const independenceWeekend = getWeekendBoundsAround(independenceDay);
    if (isBetweenInclusive(now, independenceWeekend.saturday, independenceWeekend.sunday)) {
        return 'independence-day-weekend';
    }

    if (month === 10 && day === 31) {
        return 'halloween';
    }

    if (month === 10 && day === 1) {
        return 'breast-cancer-awareness-day';
    }

    const blackFriday = getBlackFriday(year);
    const blackFridayWeek = getWeekBoundsFromDate(blackFriday);
    if (isBetweenInclusive(now, blackFridayWeek.monday, blackFridayWeek.sunday)) {
        return 'black-friday-sale';
    }

    const cyberMondayWeekStart = new Date(blackFridayWeek.monday);
    const cyberMondayWeekEnd = new Date(blackFridayWeek.sunday);
    cyberMondayWeekStart.setDate(cyberMondayWeekStart.getDate() + 7);
    cyberMondayWeekEnd.setDate(cyberMondayWeekEnd.getDate() + 7);
    if (isBetweenInclusive(now, cyberMondayWeekStart, cyberMondayWeekEnd)) {
        return 'cyber-monday-sale';
    }

    if (month === 12 && day >= 22 && day <= 26) {
        return 'christmas';
    }

    return 'default';
}

function resolveSeasonFromQuery() {
    const params = new URLSearchParams(window.location.search);
    const season = params.get('season');

    if (season) {
        const normalized = season.toLowerCase();

        try {
            window.localStorage.setItem(SEASON_STORAGE_KEY, normalized);
        } catch (error) {
        }

        return normalized;
    }

    try {
        const storedSeason = window.localStorage.getItem(SEASON_STORAGE_KEY);
        return storedSeason ? storedSeason.toLowerCase() : null;
    } catch (error) {
        return null;
    }
}

function applySeasonalLogo(season) {
    const seasonalLogos = {
        // Add your holiday logo URLs here when ready.
        // Example: '/content/img/christmas-logo.png'
        christmas: '',
        valentines: '',
        stpatricks: '',
        'easter-weekend': '',
        'mothers-day-weekend': '',
        'fathers-day-weekend': '',
        'independence-day-weekend': '',
        halloween: '',
        'breast-cancer-awareness-day': '',
        'black-friday-sale': '',
        'cyber-monday-sale': '',
    };

    const logoImg = document.querySelector('.header-logo-image, .header-logo-image-unknown-size');

    if (!logoImg) {
        return;
    }

    if (!logoImg.dataset.originalSrc) {
        logoImg.dataset.originalSrc = logoImg.getAttribute('src') || '';
        logoImg.dataset.originalSrcset = logoImg.getAttribute('srcset') || '';
    }

    const holidayLogo = seasonalLogos[season];

    if (holidayLogo) {
        logoImg.setAttribute('src', holidayLogo);
        logoImg.removeAttribute('srcset');
        return;
    }

    logoImg.setAttribute('src', logoImg.dataset.originalSrc);

    if (logoImg.dataset.originalSrcset) {
        logoImg.setAttribute('srcset', logoImg.dataset.originalSrcset);
    } else {
        logoImg.removeAttribute('srcset');
    }
}

function applyRepairIconTint() {
    const icons = document.querySelectorAll(".repair-container img.nav-icon[src$='.png' i]");

    if (!icons.length) {
        return;
    }

    const styles = window.getComputedStyle(document.body);
    const tintColor = (styles.getPropertyValue('--preview-brown-1') || '').trim();

    if (!tintColor) {
        return;
    }

    icons.forEach(icon => {
        const currentSrc = icon.getAttribute('src') || '';

        if (!icon.dataset.originalSrc) {
            icon.dataset.originalSrc = currentSrc;
        }

        if (!icon.dataset.originalSrc) {
            return;
        }

        if (icon.dataset.tintedColor === tintColor) {
            icon.style.setProperty('filter', 'none', 'important');
            return;
        }

        const sourceImage = new Image();
        sourceImage.decoding = 'async';

        sourceImage.onload = () => {
            const width = sourceImage.naturalWidth || icon.naturalWidth;
            const height = sourceImage.naturalHeight || icon.naturalHeight;

            if (!width || !height) {
                return;
            }

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;

            const context = canvas.getContext('2d');

            if (!context) {
                return;
            }

            context.clearRect(0, 0, width, height);
            context.drawImage(sourceImage, 0, 0, width, height);
            context.globalCompositeOperation = 'source-in';
            context.fillStyle = tintColor;
            context.fillRect(0, 0, width, height);

            try {
                icon.setAttribute('src', canvas.toDataURL('image/png'));
                icon.dataset.tintedColor = tintColor;
                icon.style.setProperty('filter', 'none', 'important');
            } catch (error) {

            }
        };

        sourceImage.src = icon.dataset.originalSrc;
    });
}

export default function initSeasonalTheme() {
    if (!document || !document.body) {
        return;
    }

    const queryOverride = resolveSeasonFromQuery();
    const season = queryOverride || resolveSeasonFromDate(new Date());

    const validSeasons = [
        'default',
        'valentines',
        'stpatricks',
        'easter-weekend',
        'mothers-day-weekend',
        'fathers-day-weekend',
        'independence-day-weekend',
        'halloween',
        'breast-cancer-awareness-day',
        'black-friday-sale',
        'cyber-monday-sale',
        'christmas',
    ];

    const selectedSeason = validSeasons.includes(season) ? season : 'default';

    validSeasons.forEach(name => {
        document.body.classList.remove(`season-${name}`);
    });

    document.body.classList.remove('season-preview-brown');

    if (selectedSeason !== 'default') {
        document.body.classList.add('season-preview-brown');
    }

    document.body.classList.add(`season-${selectedSeason}`);
    document.body.setAttribute('data-season', selectedSeason);
    applySeasonalLogo(selectedSeason);
    applyRepairIconTint();
}
