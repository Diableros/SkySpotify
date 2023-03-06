const getPadTime = (time: number): string => {
	return time.toString().padStart(2, '0');
};

export const formatTrackTime = (seconds: number): string => {
	const min = getPadTime(Math.floor(seconds / 60));
	const sec = getPadTime(seconds % 60);

	return `${min}:${sec}`;
};
