import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';

function GifGrid({ category }) {
	const { images, isLoading } = useFetchGifs(category);

	return (
		<>
			<h2>{category}</h2>
			{isLoading ? (
				<h2>Loading...</h2>
			) : (
				<div className="card-grid">
					{images?.map((image) => (
						<GifGridItem key={image.id} {...image} />
					))}
				</div>
			)}
		</>
	);
}
export default GifGrid;
