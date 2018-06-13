void async function() {

  posenet
    .load(0.75) // multiplier is lower if your GPU is weak -- 1.01 is default
    .then((net) => {
      return net
        .estimateSinglePose(
          /*image*/,
          /*imageScaleFactor*/
          /*flipHorizontal*/,
          /*outputStride*/
        );
    }).then((pose) => {
      console.log(pose);
      // pose object has anchor locations for joints and facial features with x/y coordinates
      // doesn't really do much for actual pose comparisons -- need to just have a regressive
      // difference to classify?
      // make a crappy dancing game, combine api
    });

  //estimateMultiplePoses returns array of pose objects

}();

