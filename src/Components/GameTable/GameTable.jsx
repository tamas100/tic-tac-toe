import React from "react";
import FirstRow from "../FirstRow/FirstRow";

export default function GameTable() {
  
  return (
          <div>            
            <table>
              <thead>
                <tr>
                  <th>Board</th>
                </tr>
              </thead>
              <tbody>
                  {FirstRow}
              </tbody>
            </table>
          </div>
  );
}