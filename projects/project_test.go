package projects

import (
	"errors"
	"testing"
	"time"

	"github.com/ARGOeu/argo-messaging/stores"
	"github.com/stretchr/testify/suite"
)

type ProjectsTestSuite struct {
	suite.Suite
}

func (suite *ProjectsTestSuite) TestProjects() {
	store := stores.NewMockStore("mockhost", "mockbase")
	tm := time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC)

	item1 := NewProject("argo_uuid", "ARGO", tm, tm, "userA", "simple project")
	item2 := NewProject("argo_uuid2", "ARGO2", tm, tm, "userA", "simple project")
	ep1 := Projects{List: []Project{item1}}
	ep2 := Projects{List: []Project{item2}}
	ep3 := Projects{List: []Project{item1, item2}}
	ep4 := Projects{}
	p1, err := Find("ARGO", store)
	suite.Equal(ep1, p1)
	suite.Equal(nil, err)
	p2, err := Find("ARGO2", store)
	suite.Equal(ep2, p2)
	suite.Equal(nil, err)
	p3, err := Find("", store)
	suite.Equal(ep3, p3)
	suite.Equal(nil, err)
	p4, err := Find("FOO", store)
	suite.Equal(ep4, p4)
	suite.Equal(errors.New("not found"), err)

	// Create new project
	itemNew := NewProject("uuid_new", "BRAND_NEW", tm, tm, "userA", "brand new project")
	CreateProject("uuid_new", "BRAND_NEW", tm, "userA", "brand new project", store)
	expNew := Projects{List: []Project{itemNew}}
	expAllNew := Projects{List: []Project{item1, item2, itemNew}}

	pNew, err := Find("BRAND_NEW", store)
	suite.Equal(expNew, pNew)
	suite.Equal(nil, err)

	// Test GetNameByUUID
	suite.Equal("BRAND_NEW", GetNameByUUID("uuid_new", store))

	pAllNew, err := Find("", store)
	suite.Equal(expAllNew, pAllNew)
	suite.Equal(nil, err)

	// Test Export Json
	expJSON := `{
   "projects": [
      {
         "name": "ARGO",
         "created_on": "2009-11-10T23:00:00Z",
         "modified_on": "2009-11-10T23:00:00Z",
         "created_by": "userA",
         "description": "simple project"
      },
      {
         "name": "ARGO2",
         "created_on": "2009-11-10T23:00:00Z",
         "modified_on": "2009-11-10T23:00:00Z",
         "created_by": "userA",
         "description": "simple project"
      },
      {
         "name": "BRAND_NEW",
         "created_on": "2009-11-10T23:00:00Z",
         "modified_on": "2009-11-10T23:00:00Z",
         "created_by": "userA",
         "description": "brand new project"
      }
   ]
}`
	outJSON, err := pAllNew.ExportJSON()
	suite.Equal(expJSON, outJSON)
	suite.Equal(nil, err)

	// Test Get from json
	prJSON := `{

    "description":"project with only description"
  }`
	expGen01 := Project{Description: "project with only description"}

	prGen01, err := GetFromJSON([]byte(prJSON))
	suite.Equal(expGen01, prGen01)
	suite.Equal(nil, err)

	prJSON2 := `{
  "created_on": "2009-11-10T23:00:00Z",
  "modified_on": "2009-11-10T23:00:00Z",
  "description":"another description"
  }`
	expGen02 := Project{CreatedOn: tm, ModifiedOn: tm, Description: "another description"}

	prGen02, err := GetFromJSON([]byte(prJSON2))
	suite.Equal(expGen02, prGen02)
	suite.Equal(nil, err)

	// Test erroneous json
	prJSON3 := `{
  "created_on": "2009-11-10T23:00:00Z",
  "modified_other description"
  }`
	expGen03 := Project{}

	prGen03, err := GetFromJSON([]byte(prJSON3))
	suite.Equal(expGen03, prGen03)
	suite.Equal(true, err != nil)

}

func TestProjectsTestSuite(t *testing.T) {
	suite.Run(t, new(ProjectsTestSuite))
}
