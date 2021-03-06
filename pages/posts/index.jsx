import postcardStyles from '../../components/Postcard/Postcard.module.css';
import PostCard from '../../components/Postcard/Postcard';

export default function posts({ data }) {
	return (
		<main className='main'>
			{data && (
				<div className={postcardStyles.container}>
					{data?.map((post) => (
						<PostCard title={post.title} id={post.id} key={post.id} />
					))}
				</div>
			)}
		</main>
	);
}

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await res.json();

	return {
		props: { data },
	};
};
