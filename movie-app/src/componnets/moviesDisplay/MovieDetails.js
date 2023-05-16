import MovieInfoRow from "./MovieInfoRow";

function MovieDetails({ movie }) {
    return (
        <div className="card-body">
            <h2 className="card-title">{movie.original_title}</h2>
            <div className="flex flex-col justify-between">
                <h4>Overview</h4>
                <div className="text-base lg:text-lg text-white mb-2">{movie.overview}</div>
                <div className="text-sm text-white font-medium">
                    <MovieInfoRow label="Release" value={movie.release_date} icon="📅" />
                    <MovieInfoRow label="Rank" value={`${movie.vote_average}/10`} icon="⭐" />
                    <MovieInfoRow label="Vote count" value={`${movie.vote_count} 👓`} />
                    <MovieInfoRow label="Language" value={movie.original_language} icon="🌐" />
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;