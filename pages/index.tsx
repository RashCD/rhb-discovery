import Link from 'next/link';
import { useRouter } from 'next/router';
import useEffectOnce from '../hooks/useEffectOnce';

export default function Home() {
	const router = useRouter();

	useEffectOnce(() => {
		router.push('/questionnaire');
	});

	return <></>;
}
