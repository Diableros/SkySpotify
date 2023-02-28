import useSongsQuery from 'hooks/useSongsQuery';

const MainScreen = () => {
	const { data, isLoading, isError } = useSongsQuery();

	return (
		<>
			{data && !isLoading ? (
				data.map((elem) => (
					<div key={elem.id}>
						{elem.author} - {elem.name}
					</div>
				))
			) : (
				<p>{!isError ? 'Loading...' : 'Query error...'}</p>
			)}
		</>
	);
};

export default MainScreen;
