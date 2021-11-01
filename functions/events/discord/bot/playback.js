const helpers = require('../../../../helpers/shared.js');

let nextTrack = await helpers.dequeueTrack(context.params.event);
if (nextTrack) {
  await helpers.play(context.params.event, nextTrack.youtube_link, false)
}
