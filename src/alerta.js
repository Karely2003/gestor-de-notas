
import Swal from 'sweetalert2';

export const mostrarAlerta = (mensaje) => {
  Swal.fire({
    icon: 'warning',
    title: 'Campo vacio',
    text: mensaje,
    confirmButtonColor: '#c16842'
  });
};

export const mostrarExito = (mensaje) => {
  Swal.fire({
    icon: 'success',
    title: 'Exito',
    text: mensaje,
    confirmButtonColor: '#6f42c1'
  });
};

export const confirmarEliminacion = async () => {
  const resultado = await Swal.fire({
    title: '¿Esta seguro?',
    text: 'Esta accin eliminara la nota permanentemente.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'Cancelar'
  });

  return resultado.isConfirmed;
};
