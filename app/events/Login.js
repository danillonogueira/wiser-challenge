import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { debounce } from 'lodash';
import loginService from './../services/LoginService';
import { showSuccessModal, showFailureModal } from './../helpers/Modals';

const MySwal = withReactContent(Swal);

const login = debounce(() => {
  MySwal.fire({
    text: 'Fazendo login...',
    allowOutsideClick: false,
    didOpen: () => {
      MySwal.showLoading();
        loginService()
          .then(() => showSuccessModal())
          .catch(() => showFailureModal());
    }
  })
}, 250);

export default login;
