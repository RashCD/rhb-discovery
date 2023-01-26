import { Button, Container, Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import FinancialDescription from '../components/FinancialDescription';
import FinancialTypes from '../components/FinancialTypes';

const FitnessType = () => {
	const [carouselIndex, setCarouselIndex] = useState(0);

	return (
		<Container sx={{ my: 5, height: '100%' }}>
			<Stack sx={{ alignItems: 'center', justifyContent: 'space-around', height: '100%' }}>
				<Box sx={{ mb: 3 }}>
					<Image
						alt="rhb discovery logo"
						src={'/discovery.png'}
						width={400}
						height={50}
						style={{
							objectFit: 'contain',
						}}
					/>
				</Box>
				<Carousel
					navButtonsAlwaysVisible
					animation="slide"
					index={carouselIndex}
					autoPlay={false}
					cycleNavigation={false}
					indicatorContainerProps={{
						style: {
							display: 'flex',
							justifyContent: 'center',
							marginTop: carouselIndex === 0 ? '5rem' : '0px',
						},
					}}
					sx={{
						pt: 1,
						pb: 5,
						width: '100%',
					}}
					next={(index) => index && setCarouselIndex(index)}
					prev={() => setCarouselIndex((prev) => prev - 1)}
				>
					<FinancialTypes />
					<FinancialDescription />
				</Carousel>
				<Button
					variant="contained"
					sx={{ bgcolor: 'tertiary.main', borderRadius: 2, width: 200, mt: 3 }}
					onClick={() => setCarouselIndex(carouselIndex + 1)}
				>
					Next
				</Button>
			</Stack>
		</Container>
	);
};

export default FitnessType;
