import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { debounce } from 'lodash';
import loginService from './../services/LoginService';
import { showSuccessModal, showFailureModal } from './../helpers/Modals';

const Message = withReactContent(Swal);

const login = debounce((callback) => {
  Message.fire({
    text: 'Fazendo login...',
    allowOutsideClick: false,
    didOpen() {
      Message.showLoading();
      loginService()
        .then(() => showSuccessModal())
        .catch(() => showFailureModal())
        .finally(() => callback());
    }
  });
}, 250);

export default login;
