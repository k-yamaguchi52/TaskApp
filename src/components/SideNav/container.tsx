import React, { FC } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import SideNav from "./presentation";
import { TodoState, Project, todoSlice } from "../../redux/todo";

const EnhancedSideNav: FC = () => {
  const projectList = useSelector<TodoState, { [id: string]: Project }>(
    (state) => state.projectList
  );
  const selectedProjectId = useSelector<TodoState, string>(
    (state) => state.selectedProjectId
  );
  const selectedTaskId = useSelector<TodoState, string | undefined>(
    (state) => state.selectedTaskId
  );
  const dispatch = useDispatch();
  const { projectCreated, projectDeleted, projectSelected, taskSelected } = todoSlice.actions;

  return (
    <SideNav
      projectList={Object.values(projectList)}
      setSelectedProjectId={(id: string) => dispatch(projectSelected(id))}
      selectedProjectId={selectedProjectId}
      addProject={(project: Pick<Project, "title">) =>
        dispatch(projectCreated(project))
      }
      deleteProject={(id: string) => dispatch(projectDeleted(id))}
      setSelectedTaskId={(id?:string) => dispatch(taskSelected(id))}
    />
  );
};

export default EnhancedSideNav;
