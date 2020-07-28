import React from 'react';
import { Alert } from 'react-bootstrap';
import moment from 'moment';

import taskItems from '../task.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faExclamationTriangle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default class TaskItems extends React.Component {
   
   render() {
      return(
         taskItems.map((task) => {
            let alertType;
            let priorityClass;
            let icon;
            let timeDiff;
            let dueTime

            let today = "08/10/2020";
            today = moment(today);
            let dueDate = moment(task.dueDate);
            timeDiff = dueDate.diff(today, "days");

            if(timeDiff === 0) {
               dueTime = "Due Today";
               alertType = "primary";
               icon = faExclamationCircle;
            } else if(timeDiff < 0) {
               if(task.percentComplete !== 100) {
                  icon = faExclamationCircle;
                  dueTime = "Due " + Math.abs(timeDiff) + " days ago";
                  alertType = "danger";
               } else {
                  dueTime = "Completed " + task.completedDate;
                  alertType = "success";
                  icon = faCheckCircle;
               }
            }


            if(task.priority === "(1) High") {
               priorityClass = "priority text-danger"
            } else if(task.priority === "(2) Normal") {
               priorityClass = "priority normalPriority";
               icon = faExclamationTriangle;
            }

            return(
               <tr id={`tasks-${task.id}`} key={task.id}>
                  <th scope="row">{task.id}</th>
                  <td>{task.title}</td>
                  <td>{task.assignee}</td>
                  <td>
                     <div className={priorityClass}>
                        {task.priority}
                     </div>
                  </td>
                  <td>
                     <div className="dueDateContainer">
                        <div className="dueDate">{task.dueDate}</div>
                        <Alert variant={alertType}
                           className="dueDateAlert">
                           <FontAwesomeIcon icon={icon}  className="dueDateIndicator" />
                           {dueTime}
                        </Alert>
                     </div>
                  </td>
                  <td className="percentComplete">{task.percentComplete}%</td>
               </tr>
            );
         })
      );
   }
}
