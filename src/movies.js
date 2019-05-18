const movies = [
  {
    name: "The Dark Knight",
    rating: "PG-13",
    year: 2012,
    bestScene: {
      name: "fight",
      location: "sewer",
      sceneLength: 10,
      actors: ["Christian Bale", "Tom Hardy"]
    }
  },
  {
    name: "Good Burger",
    rating: "PG",
    year: 1994,
    bestScene: {
      name: "jump",
      location: "giant milkshake",
      sceneLength: 5,
      actors: ["Kenan Thompson", "Kel Mitchell"]
    }
  },
  {
    name: "Sharknado 2",
    rating: "TV-14",
    year: 2013
  },
  {
    name: "The Big Short",
    rating: "R",
    year: 2015,
    bestScene: {
      name: "explanantion",
      location: "casino",
      sceneLength: 20,
      actors: ["Christian Bale", "Steve Carrell"]
    }
  }
];

// return the total length of all of the best scenes in the movies
function bestScenes(movies) {
  return movies.reduce((accumulator, movie) => {
		const bestScene = movie.bestScene;
		if (bestScene) {
			accumulator.push(bestScene);
    }
    return accumulator;
	}, []);
}

const onlytheBestScenes = bestScenes(movies);
console.log(`The best scenes are: ${onlytheBestScenes}`);

function getUniqueActors(movies) {
  const bestSceneList = bestScenes(movies);
  const actors = bestSceneList.reduce((accumulator, bestScene) => {
    const actors = bestScene.actors;
		if (actors && actors.length > 0) {
			accumulator.push(...actors);
    }
    return accumulator;
  }, []);
  return [...new Set(actors)]; 
}

console.log(`The list of unique actors are: ${getUniqueActors(movies)}`);