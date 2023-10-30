import React from "react";
import './assets/trans.css'


function Category() {
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
                            <th>TipeID</th>
                            <th>Name</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="active-row">
                            <td>1</td>
                            <td>Domenic</td>
                            <td>88,110</td>
                            <td>
                                <button class="view">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Sally</td>
                            <td>72,400</td>
                            <td>
                                <button class="view">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Nick</td>
                            <td>52,300</td>
                            <td>
                                <button class="view">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Nick</td>
                            <td>52,300</td>
                            <td>
                                <button class="view">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Nick</td>
                            <td>52,300</td>
                            <td>
                                <button class="view">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Nick</td>
                            <td>52,300</td>
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

export default Category;