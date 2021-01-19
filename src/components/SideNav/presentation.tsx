import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";
import React, { FC, useState } from "react";

import AddListDialog from "../AddListDialog";
import MessageDialog from "../MessageDialog";
import { Project } from "../../redux/todo";


type Props = {
  projectList: Project[];
  setSelectedProjectId : (id: string) => void;
  selectedProjectId: string;
  addProject: (project: Pick<Project, "title">) => void;
  deleteProject: (id: string) => void;
  setSelectedTaskId : (id?: string) => void;
};

const SideNav: FC<Props> = ({ projectList = [], setSelectedProjectId = () => undefined, selectedProjectId = "mytask", addProject = () => undefined, deleteProject = () => undefined, setSelectedTaskId = () => undefined} ) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const handleClickOpenDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const handleClickOpenAddDialog = () => {
    setAddDialogOpen(true);
  };

  const handleCloseAddDialog = () => {
    setAddDialogOpen(false);
  };

  // const handleClickAllButton = () => {
  //   setSelectedProjectId("");
  // }

  const handleClickProjectButton = (projectId: string) => {
    setSelectedProjectId(projectId);
    setSelectedTaskId(undefined);
  }

  const handleClickAddButton = (project: Pick<Project, "title">) => {
    addProject(project);
    setAddDialogOpen(false);
  }

  const handleClickDeleteButton = (id: string) => {
    deleteProject(id);
    setDeleteDialogOpen(false);
  }

  return (
    <>
      <List component="nav">
      <ListItem key="addList" button onClick={handleClickOpenAddDialog}>
          <ListItemIcon>
            <Add></Add>
          </ListItemIcon>
          <ListItemText primary="リストを追加"></ListItemText>
        </ListItem>
        {/* <ListItem key="mytask" button onClick={handleClickAllButton} selected={selectedProjectId === "mytask"}>
          <ListItemText primary="MyTask"></ListItemText>
        </ListItem> */}
        {projectList.map((project) => (
          <ListItem key={project.id} button onClick={e => handleClickProjectButton(project.id)} selected={project.id === selectedProjectId}>
            <ListItemText primary={project.title}></ListItemText>
            <ListItemSecondaryAction>
            <IconButton onClick={handleClickOpenDeleteDialog} disabled={project.id !== selectedProjectId || project.id === "mytask"}>
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <MessageDialog open={deleteDialogOpen} onClose={handleCloseDeleteDialog} title="削除しますか？" content="リストの中身のTODOも削除されます。" handleClickButton={() => handleClickDeleteButton(selectedProjectId)} />
      <AddListDialog open={addDialogOpen} onClose={handleCloseAddDialog} handleClickAddButton={handleClickAddButton} />
    </>
  );
};

export default SideNav;
