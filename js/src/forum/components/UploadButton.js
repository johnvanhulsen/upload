import legalModal from './legalModal';
import app from 'flarum/app';
import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import ReplyComposer from 'flarum/components/ReplyComposer';
import EditPostComposer from 'flarum/components/EditPostComposer';

/* global m */

export default class UploadButton extends Component {
    init() {
        // the service type handling uploads
        this.textAreaObj = null;

        // initial state of the button
        this.uploading = m.prop(false);
    }

    view() {
        const buttonText = this.uploading() ? app.translator.trans('fof-upload.forum.states.loading') : app.translator.trans('fof-upload.forum.buttons.attach');

        return m('.Button.hasIcon.fof-upload-button.Button--icon', {
            className: this.uploading() ? 'uploading' : '',
        }, [
            this.uploading() ? LoadingIndicator.component({
                size: 'tiny',
                className: 'LoadingIndicator--inline Button-icon',
            }) : icon('fas fa-file-upload', {className: 'Button-icon'}),
            m('span.Button-label', buttonText),
            m('form', [
                m('input', {
                    type: 'file',
                    multiple: true,
                    onchange: this.process.bind(this),
                }),
            ]),
        ]);
    }

    /**
     * Process the upload event.
     *
     * @param e
     */
    process(e) {
      var files = this.$('input').prop('files');
      var _this = this;
      var check;

      delete app.legalupload;
      legalModal();

        (function _check() {
            if (app.legalupload === void (0) && app.modal.component) {
                check = setTimeout(function () {
                    _check();
                }, 1000);
                return;
            }

            if (app.legalupload) {
                // set the button in the loading state (and redraw the element!)
                _this.loading = true;
                m.redraw();

                _this.uploadFiles(files);
            }
        })();
    }

    uploadFiles(files) {
        this.uploading(true);
        m.redraw(); // Forcing a redraw so that the button also updates if uploadFiles() is called from DragAndDrop or PasteClipboard

        const data = new FormData;

        for (let i = 0; i < files.length; i++) {
            data.append('files[]', files[i]);
        }

        // send a POST request to the api
        return app.request({
            method: 'POST',
            url: app.forum.attribute('apiUrl') + '/fof/upload',
            // prevent JSON.stringify'ing the form data in the XHR call
            serialize: raw => raw,
            data
        }).then(
            this.success.bind(this),
            this.failure.bind(this)
        );
    }

    /**
     * Reset the button
     */
    resetButton() {
        // reset the button for a new upload
        setTimeout(() => {
            this.$('form')[0].reset();
            this.uploading(false);
            m.redraw();

        }, 1000);
    }

    /**
     * Handles errors.
     *
     * @param message
     */
    failure(message) {
        app.modal.close();

        this.resetButton();

        alert(app.translator.trans('fof-upload.forum.states.error'));
    }

    /**
     * Appends the file's link to the body of the composer.
     */
    success(response) {
        app.modal.close();

        response.forEach((bbcode) => {
            this.textAreaObj.insertAtCursor(bbcode + '\n');
        });

        // Scroll the preview into view
        // We don't call this.textAreaObj.props.preview() because that would close the composer on mobile
        // Instead we just directly perform the same scrolling and skip the part about minimizing the composer
        if (app.composer.component instanceof ReplyComposer) {
            m.route(app.route.discussion(app.composer.component.props.discussion, 'reply'));
        }

        if (app.composer.component instanceof EditPostComposer) {
            m.route(app.route.post(app.composer.component.props.post));
        }

        this.resetButton();
    }
}
