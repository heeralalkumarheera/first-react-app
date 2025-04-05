function AddTodo() {
    return <div class="row heera-row">
        <div class="col-6">
            <input type="text" placeholder="Enter to do here"></input>
        </div>
        <div class="col-4">
            <input type="date"></input>
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-success heera-button">
                Add
            </button>
        </div>
    </div>
}
export default AddTodo;