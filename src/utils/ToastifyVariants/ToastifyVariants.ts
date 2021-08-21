import { toast } from 'react-toastify';

export const toastify = (variant:string, message:string) => {
    if (variant === 'success')  return  toast.success(message);
    if (variant === 'error') return toast.error(message);
    if (variant === 'warn')  return toast.warn(message);
    if ( variant === 'info') return toast.info(message);
};
