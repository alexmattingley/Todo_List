<table class="table table-hover">
    <thead>
    <tr>
        <th class="checkbox_th">✓</th>
        <th>Task
            <button class="addBtn btn btn-xs btn-success" type="button"
                data-toggle="modal" data-target="#myModal">+</button>
        </th>
        <th>Date</th>
        <th>Priority</th>
    </tr>
    </thead>
    <tbody>
    <tr data-toggle="modal" data-target="#itemModal">
        <td><input type="checkbox"></td>
        <td>Creating version 0.1 of the to do list</td>
        <td>8/25/15</td>
        <td>high</td>
    </tr>
    <tr>
        <td><input type="checkbox"></td>
        <td>Finish the to do list</td>
        <td>9/11/15</td>
        <td></td>
    </tr>
    <tr>
        <td><input type="checkbox"></td>
        <td>Start working on version 0.2</td>
        <td></td>
        <td></td>
    </tr>
    <tr class="tableBottom">
        <td></td>
        <td></td>
        <td></td>
    </tr>
    </tbody>
</table>

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add New Task</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Task">
                </div>

                <div class="input-group form-group date">
                    <input type="text" class="form-control" placeholder="Date">
                    <div class="input-group-addon"><span class="glyphicon glyphicon-th" aria-hidden="true"></span></div>
                </div>

                <div class="form-group">
                    <select class="form-control" id="sel1">
                        <option></option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>

                <div class="form-group">
                    <textarea class="form-control" rows="5" id="comment" placeholder="Extra details..."></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" data-dismiss="modal">Add</button>
            </div>
        </div>

    </div>
</div>

<!-- Modal -->
<div id="itemModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Task Details</h4>
            </div>
            <div class="modal-body">
                <p>Task:</p>
                <p>Date:</p>
                <p>Priority:</p>
                <p>Details:</p>
            </div>
            <div class="modal-footer">
            </div>
        </div>

    </div>
</div>