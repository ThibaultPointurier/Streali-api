enum TwitchEventType {
	Follow = 10,
	Cheer = 20,
	Subscribe = 30,
	SubscriptionGift = 31,
	Raid = 40,
	HypeTrainBegin = 50,
	HypeTrainProgress = 51,
	HypeTrainEnd = 52,
	GoalBegin = 60,
	GoalEnd = 62,
}

export const TwitchEventTypeMap = {
	'channel.follow': TwitchEventType.Follow,
	'channel.subscribe': TwitchEventType.Subscribe,
	'channel.cheer': TwitchEventType.Cheer,
	'channel.subscription.gift': TwitchEventType.SubscriptionGift,
	'channel.raid': TwitchEventType.Raid,
	'channel.hype_train.begin': TwitchEventType.HypeTrainBegin,
	'channel.hype_train.progress': TwitchEventType.HypeTrainProgress,
	'channel.hype_train.end': TwitchEventType.HypeTrainEnd,
	'channel.goal.begin': TwitchEventType.GoalBegin,
	'channel.goal.end': TwitchEventType.GoalEnd,
}

export default TwitchEventType
