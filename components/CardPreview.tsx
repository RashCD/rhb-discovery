import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const CardPreview = ({
	title,
	description,
	image,
}: {
	title: string;
	description: string;
	image: string;
}) => {
	return (
		<Grid item md={5} display="flex">
			<Paper
				elevation={2}
				sx={{
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					borderRadius: 3,
					overflow: 'hidden',
					m: 3,
					aspectRatio: '1/1.1',
				}}
			>
				<Stack width={'100%'} height={'100%'}>
					<Box
						sx={{
							bgcolor: 'grey',
							width: '100%',
							minHeight: 200,
							position: 'relative',
						}}
					>
						<Image
							alt="product placement"
							src={image}
							fill
							sizes="200px"
							style={{
								objectFit: 'cover',
							}}
						/>
					</Box>
					<Box
						sx={{
							height: '100%',
							px: 3,
							py: 2,
						}}
					>
						<Typography variant="h6" sx={{ mb: 2, fontWeight: '500' }}>
							{title}
						</Typography>
						<Typography variant="subtitle2" sx={{ color: 'grey' }}>
							{description}
						</Typography>
					</Box>
				</Stack>
			</Paper>
		</Grid>
	);
};

export default CardPreview;
