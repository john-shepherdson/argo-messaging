package stores

// Store encapsulates the generic store interface
type Store interface {
	Initialize()
	QuerySubs() []QSub
	QueryTopics() []QTopic
	RemoveTopic(project string, name string) error
	RemoveSub(project string, name string) error
	InsertTopic(project string, name string) error
	InsertSub(project string, name string, topic string, offset int64, ack int, push string, pushMaxMsg int, rPolicy string, rPeriod int) error
	HasProject(project string) bool
	HasUsers(project string, users []string) (bool, []string)
	QueryOneSub(project string, sub string) (QSub, error)
	QueryPushSubs() []QSub
	HasResourceRoles(resource string, roles []string) bool
	GetUserRoles(project string, token string) ([]string, string)
	UpdateSubOffset(name string, offset int64)
	UpdateSubPull(name string, offset int64, ts string)
	UpdateSubOffsetAck(name string, offset int64, ts string) error
	ModSubPush(project string, name string, push string, rPolicy string, rPeriod int) error
	QueryACL(project string, resource string, name string) (QAcl, error)
	ModACL(project string, resource string, name string, acl []string) error
	Clone() Store
	Close()
}
