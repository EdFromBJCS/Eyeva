import CornerstoneAuth from '../../theme/auth';
import nod from '../../theme/common/nod';
import validation from '../../theme/common/form-validation';

export default class Auth extends CornerstoneAuth {
    registerCreateAccountValidator($createAccountForm) {
        super.registerCreateAccountValidator($createAccountForm);

        // stop multi-step form if form has no data-step attribute
        if ($createAccountForm.attr('data-step') === undefined) return;

        const validationModel = validation($createAccountForm, this.context)
            .filter(({ selector }) => $createAccountForm.find(selector).is(':visible'));

        const firstStepValidator = nod({
            submit: `${this.formCreateSelector} [data-continue-button]`,
            delay: 900,
        });

        firstStepValidator.add(validationModel);

        const $continueBtn = $createAccountForm.find('[data-continue-button]');
        const $backBtn = $createAccountForm.find('[data-back-button]');

        $continueBtn.on('click', event => {
            event.preventDefault();
            firstStepValidator.performCheck();
            if (firstStepValidator.areAll('valid')) {
                $createAccountForm.attr('data-step', '2');
            }
        });

        $backBtn.on('click', event => {
            event.preventDefault();
            $createAccountForm.attr('data-step', '1');
        });
    }
}
