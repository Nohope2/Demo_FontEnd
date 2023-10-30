import React from "react";
import './assets/trans.css'


function Trans() {
    return (
        <div>
            <div class="container">
            <div class="day">
            </div>
            <div class="table-trans">
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>WalletID</th>
                            <th>CategoryID</th>
                            <th>Date</th>
                            <th>Value</th>
                            <th>Description</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="active-row">
                            <td>1</td>
                            <td>Domenic</td>
                            <td>88,110</td>
                            <td>dcode</td>
                            <td>dcode</td>
                            <td>dcode</td>
                            <td>
                                <button class="view">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Sally</td>
                            <td>72,400</td>
                            <td>Students</td>
                            <td>Students</td>
                            <td>Students</td>
                            <td>
                                <button class="view">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Nick</td>
                            <td>52,300</td>
                            <td>dcode</td>
                            <td>dcode</td>
                            <td>dcode</td>
                            <td>
                                <button class="view">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Nick</td>
                            <td>52,300</td>
                            <td>dcode</td>
                            <td>dcode</td>
                            <td>dcode</td>
                            <td>
                                <button class="view">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Nick</td>
                            <td>52,300</td>
                            <td>dcode</td>
                            <td>dcode</td>
                            <td>dcode</td>
                            <td>
                                <button class="view">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Nick</td>
                            <td>52,300</td>
                            <td>dcode</td>
                            <td>dcode</td>
                            <td>dcode</td>
                            <td>
                                <button class="view">View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default Trans;