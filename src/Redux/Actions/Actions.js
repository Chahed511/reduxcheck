import { Add_Task } from "../ActionTypes/ActionTypes";
import { Del_Task } from "../ActionTypes/ActionTypes";
import { Done_Task } from "../ActionTypes/ActionTypes";
import { Edit_Task } from "../ActionTypes/ActionTypes";
import { Filter_Done } from "../ActionTypes/ActionTypes";
import { Filter_Undone } from "../ActionTypes/ActionTypes";
import { Filter_All } from "../ActionTypes/ActionTypes";

export function addTask(payload) {
  return { type: Add_Task, payload };
}

export function deleteTask(payload) {
  return { type: Del_Task, payload };
}

export function doneTask(payload) {
  return { type: Done_Task, payload };
}

export function editTask(payload) {
  return { type: Edit_Task, payload };
}

export function filterDone(payload) {
  return { type: Filter_Done, payload };
}

export function filterUndone(payload) {
  return { type: Filter_Undone, payload };
}

export function allTasks(payload) {
  return { type: Filter_All, payload };
}
