import { w2ui, w2form, w2popup } from 'w2ui';

export function renderSignInForm() {
    if (!w2ui.signInForm) {
        new w2form({
            name: 'signInForm',
            style: 'border: 0px; background-color: transparent;',
            fields: [
                { field: 'username', type: 'text', required: true, html: { label: 'Username' } },
                { field: 'password', type: 'text', required: true, html: { label: 'Password' } },
            ],
            actions: {
                "Sign In"() {
                    w2popup.close();
                },
            }
        });
    }

    w2popup.open({
        title: 'Sign In',
        body: '<div id="form" style="width: 100%; height: 100%;"></div>',
        style: 'padding: 15px 0px 0px 0px',
        width: 350,
        height: 220,
        showClose: false,
    }).then(() => w2ui.signInForm.render('#form'));
}