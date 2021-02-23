import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const defaultModal = {
  showConfirmButton: false,
  timer: 1000,
  allowOutsideClick: false,
};

const showSuccessModal = () => {
  MySwal.fire({
    ...defaultModal,
    icon: 'success',
    text: 'Login realizado com sucesso!',
  });
};

const showFailureModal = () => {
  MySwal.fire({
    ...defaultModal,
    icon: 'error',
    text: 'Não foi possível realizar o login',
  });
};

export const attemptLogin = (request) => {
  MySwal.fire({
    text: 'Fazendo login...',
    allowOutsideClick: false,
    didOpen: () => {
      MySwal.showLoading();
        request()
          .then(() => showSuccessModal())
          .catch(() => showFailureModal());
    }
  })
};
