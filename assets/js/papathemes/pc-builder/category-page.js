/**
 * PC Builder - Entry point for PC Builder functionality
 *
 * COPYRIGHT NOTICE:
 * ================
 * This code is proprietary and confidential to PapaThemes.
 * Copyright (c) 2024 PapaThemes. All rights reserved.
 *
 * This code is specifically developed for the Eyeva theme and is intended
 * for use exclusively within the Eyeva theme framework.
 *
 * RESTRICTIONS:
 * - This code may NOT be copied, reproduced, or distributed in any form
 * - This code may NOT be modified, refactored, or adapted for other themes
 * - This code may NOT be used as inspiration or reference for other projects
 * - Any attempt to extract, reverse engineer, or reuse this code for other
 *   themes or projects constitutes a violation of intellectual property rights
 *
 * LEGAL NOTICE:
 * Unauthorized use, copying, modification, or distribution of this code
 * is strictly prohibited and may result in legal action.
 *
 * For licensing inquiries, please contact PapaThemes.
 */

import PcBuilder from '.';

export default {
    load(context) {
        const pcBuilder = new PcBuilder(context);
        return pcBuilder;
    },
};
