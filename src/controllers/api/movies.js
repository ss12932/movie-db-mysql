const getMovies = (req, res) => {
  //need to establish connection to execute query.

  req.db.query('SELECT * FROM movies', (err, data) => {
    if (err) {
      console.log(`[ERROR]: Failed to get movies | ${err.message}`);
      return res.status(500).json({ success: false });
    }
    return res.json({ data, success: true });
  });
};
const getMovieById = (req, res) => {
  //need to establish connection to execute query.
  req.db.query(
    `SELECT * FROM movies WHERE id="${req.params.movieId}"`,
    (err, data) => {
      if (err) {
        console.log(`[ERROR]: Failed to get movie by id | ${err.message}`);
        return res.status(500).json({ success: false });
      }
      return res.json({ data, success: true });
    }
  );
};
const createMovie = (req, res) => {
  const { movieName } = req.body;
  console.log(movieName);
  if (!movieName) {
    return res
      .status(400)
      .json({ success: false, error: 'Please provide a movie name' });
  }
  req.db.query(
    `INSERT INTO movies (movie_name) VALUES ("${movieName}")`,
    (err) => {
      if (err) {
        console.log(`[ERROR]: Failed to create movie | ${err.message}`);
        return res.status(500).json({ success: false });
      }
      return res.json({ success: true });
    }
  );
};
const updateMovieById = (req, res) => {
  const { movieId } = req.params;
  const { movieName } = req.body;
  if (!review) {
    return res
      .status(400)
      .json({ success: false, error: 'Please provide a movie' });
  }
  req.db.query(
    `UPDATE movies SET movie_name="${movieName}" WHERE movie_id=${movieId}`,
    (err) => {
      if (err) {
        console.log(`[ERROR]: Failed to create movie | ${err.message}`);
        return res.status(500).json({ success: false });
      }
      return res.json({ success: true });
    }
  );
};
const deleteMovieById = (req, res) => {
  req.db.query(`DELETE FROM movies WHERE id="${req.params.movieId}"`, (err) => {
    if (err) {
      console.log(`[ERROR]: Failed to delete movie | ${err.message}`);
      return res.status(500).json({ success: false });
    }
    return res.json({ success: true });
  });
};

module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
};
