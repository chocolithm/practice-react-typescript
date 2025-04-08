import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, ModalContent, ModalAction } from '../../theme/daisyui';
import { useToggle } from '../../hooks';
import { useAuth } from '../../contexts';
import { Button } from '../../theme/daisyui';

export default function Logout() {
  const [open, toggleOpen] = useToggle(true);

  const navigate = useNavigate();
  const { logout } = useAuth();
  const onAccept = useCallback(() => {
    logout(() => {
      toggleOpen();
      navigate('/');
    });
  }, [navigate, toggleOpen, logout]);

  const onCancel = useCallback(() => {
    toggleOpen();
    navigate(-1);
  }, [navigate, toggleOpen]);

  return (
    <Modal open={open}>
      <ModalContent
        closeIconClassName="btn-primary btn-outline"
        onCloseIconClicked={onCancel}>
        <p className="text-xl text-center">Are you sure you want to logout?</p>
        <ModalAction>
          <Button className="btn-primary btn-sm" onClick={onAccept}>
            LOGOUT
          </Button>
          <Button className="btn-secondary btn-sm" onClick={onCancel}>
            CANCEL
          </Button>
        </ModalAction>
      </ModalContent>
    </Modal>
  );
}
