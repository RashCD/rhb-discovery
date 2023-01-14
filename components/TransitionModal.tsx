import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { ReactNode } from 'react';
import { Inter } from '@next/font/google';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	minWidth: 500,
	minHeight: 600,
	bgcolor: 'background.paper',
	borderRadius: '10px',
	boxShadow: 24,
	p: 4,
};

const inter = Inter({ subsets: ['latin'] });

export default function TransitionModal({
	content,
	open,
	handleClose,
}: {
	content: ReactNode;
	open: boolean;
	handleClose: () => void;
}) {
	return (
		<div>
			<Modal
				className={inter.className}
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style}>{content}</Box>
				</Fade>
			</Modal>
		</div>
	);
}
