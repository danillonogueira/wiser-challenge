import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const defaultModal = {
  showConfirmButton: false,
  timer: 2000,
  allowOutsideClick: false,
};

export const showSuccessModal = () => {
  MySwal.fire({
    ...defaultModal,
    icon: 'success',
    text: 'Login realizado com sucesso!',
  });
};

export const showFailureModal = () => {
  MySwal.fire({
    ...defaultModal,
    icon: 'error',
    text: 'Não foi possível realizar o login',
  });
};
