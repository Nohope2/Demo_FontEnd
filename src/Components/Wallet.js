import React, { Component } from "react";
import './assets/trans.css'
import Modal from 'react-modal';

class Wallet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: [
                { id: 1, name: 'LJ036-0031', content: ' Mrs. Bledsoe recall, at Oswald sat halfway to the rear of the bus, which moved slowly and intermittently as traffic became heavy.', createAt: '19-10-2023', updateAt: '23-10-2023'},
                { id: 2, name: 'LJ036-0027', content: 'which he reached at about 12.40 p.m.', createAt: '19-10-2023', updateAt: '23-10-2023'},
                { id: 3, name: 'LJ036-0032', content: 'and requested a transfer which she might use if she got through the traffic.', createAt: '19-10-2023', updateAt: '23-10-2023'},
                { id: 4, name: 'LJ036-0033', content: 'asked for a transfer and got off at the same place in the middle of the block where the lady did.', createAt: '19-10-2023', updateAt: '23-10-2023'},
                { id: 5, name: 'LJ036-0035', content: 'The man was on the bus approximately four minutes.', createAt: '19-10-2023', updateAt: '23-10-2023'},
                { id: 6, name: 'LJ036-0041', content: 'McWatters also remembered, that a man received a trance for Athelma and Elmstries, and that a man in the line-up was about the size of this man.', createAt: '19-10-2023', updateAt: '23-10-2023'},
                { id: 7, name: 'LJ036-0050', content: 'Oswald got on. He looks like a maniac. This sleeve was out here. His shirt was undone.', createAt: '19-10-2023', updateAt: '23-10-2023' },
                { id: 8, name: 'LJ036-0055', content: 'Mrs. Bledsoe identified the shirt as the one Oswald was wearing, and she stated she was certain that it was Oswald who boarded the bus.', createAt: '19-10-2023', updateAt: '23-10-2023'},
                { id: 9, name: 'LJ036-0056', content: 'Mrs. Bledsoe recall, at Oswald sat halfway to the rear of the bus, which moved slowly and intermittently as traffic became heavy.', createAt: '19-10-2023', updateAt: '23-10-2023'},
                
            ],
            isModalOpen: false,
            selectedText: null,
            isEditing: false, 
            isDelete: false,
            isAdding: false,
        };

        Modal.setAppElement('body');
    }


    handleAddNewText = () => {
        this.setState({ isModalOpen: true, selectedText: null, isAdding: true });
    }

    handleConfirmAddNewText = () => {
        const { text } = this.state;
        const newID = text.length + 1;
        const name = document.getElementById('textName').value;
        const content = document.getElementById('textContent').value;
        const createAt = document.getElementById('textCreateAt').value;
        const updateAt = document.getElementById('textUpdateAt').value;
    
        const newText = {
            id: newID,
            name: name,
            content: content,
            createAt: createAt,
            updateAt: updateAt,
        };
    
        const updatedText = [...text, newText]; 
        this.setState({ isAdding: false, isModalOpen: false, selectedText: null, text: updatedText });
    }



    // xem 
    handleViewClick = (text) => {
        this.setState({ isModalOpen: true, selectedText: text, isEditing: false });
    }

    // sửa
    handleEditClick = (text) => {
        this.setState({ isModalOpen: true, selectedText: text, isEditing: true });
    }

    handleSaveChanges = () => {
        const { text, selectedText } = this.state;
        const updatedText = text.map(item => {
            if (item.id === selectedText.id) {
                return selectedText;
            }
            return item;
        });

        this.setState({ isModalOpen: false, selectedText: null, text: updatedText });
    }

    // xóa 
    handleRemoveClick = (text) => {
        this.setState({ isRemove: true, selectedText: text, });
    }

    handleConfirmDelete = () => {
        const { text, selectedText } = this.state;
        const updatedText = text.filter(item => item.id !== selectedText.id);
        this.setState({ isRemove: false, text: updatedText, selectedText: null });
    }



    handleCloseRemove = () => {
        this.setState({ isRemove: false, selectedText: null, });
    }


    handleCloseModal = () => {
        this.setState({ isModalOpen: false, selectedText: null });
    }

    render() {

        const { text, isModalOpen, selectedText, isEditing, isRemove, isAdding } = this.state;

        return (
            <div>
                <div class="list-container">
                    <div class="add-new-text">
                        <button class="btn-control btn-add-new" onClick={this.handleAddNewText}>Add Text</button>
                    </div>

                    <div class="table-trans">
                        <table class="content-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>TextName</th>
                                    <th>Content</th>
                                    <th>CreateAt</th>
                                    <th>UpdateAt</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.text.map(text => (
                                    <tr key={text.id}>
                                        <td>{text.id}</td>
                                        <td>{text.name}</td>
                                        <td>{text.content}</td>
                                        <td>{text.createAt}</td>
                                        <td>{text.updateAt}</td>
                                        <td>
                                            <button class="btn-control view" onClick={() => this.handleViewClick(text)}>Xem</button>
                                            <button class="btn-control edit" onClick={() => this.handleEditClick(text)}>Sửa</button>
                                            <button class="btn-control remove" onClick={() => this.handleRemoveClick(text)}>Xóa</button>

                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                </div>


                <Modal
                    isOpen={isModalOpen && isAdding}
                    onRequestClose={this.handleCloseModal}
                    contentLabel="Add Text Modal"
                >
                    {
                        <div className="main">
                            <div className="popup">
                                <div className="popup-title">
                                    <h3>Add Text</h3>
                                </div>
                                <div className="popup-content">
                                    <table>
                                        
                                        <tr class="popup-row">
                                            <td><label for="textName" class="input-lbl">Name:</label></td>
                                            <td><input type="text" id="textName"></input></td>
                                        </tr>
                                        <tr class="popup-row">
                                            <td><label for="textContent" class="input-lbl">Content:</label></td>
                                            <td><input type="text" id="textContent"></input></td>
                                        </tr>
                                        <tr class="popup-row">
                                            <td><label for="textCreateAt" class="input-lbl">CreateAt:</label></td>
                                            <td><input type="text" id="textCreateAt"></input></td>
                                        </tr>
                                        <tr class="popup-row">
                                            <td><label for="textUpdateAt" class="input-lbl">UpdateAt:</label></td>
                                            <td><input type="text" id="textUpdateAt"></input></td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="popup-footer">
                                    <div className="popup-buttons">
                                        <button className="btn btn-ok" onClick={this.handleConfirmAddNewText}>Lưu</button>
                                        <button className="btn btn-cancel" onClick={this.handleCloseModal}>Hủy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </Modal>


                <Modal
                    isOpen={isModalOpen && !isAdding}
                    onRequestClose={this.handleCloseModal}
                    contentLabel="Text Edit Modal"
                >
                    {selectedText && (
                        <div class="main">
                            <div class="popup">
                                <div class="popup-title">
                                    <h3>{isEditing ? "Sửa thông tin đoạn Text" : "Xem thông tin đoạn Text"}</h3>
                                </div>
                                <div class="popup-content">
                                    <table>
                                        <tr class="popup-row">
                                            <td><label for="textId" class="input-lbl">ID:</label></td>
                                            <td><span>{selectedText.id}</span></td>
                                        </tr>
                                        <tr class="popup-row">
                                            <td><label for="textName" class="input-lbl">Name:</label></td>
                                            <td>
                                                {isEditing ? (
                                                    <input type="text" value={selectedText.name} onChange={e => {
                                                        const updatedText = { ...selectedText, name: e.target.value };
                                                        this.setState({ selectedText: updatedText });
                                                    }}
                                                    />
                                                ) : (
                                                    <span>{selectedText.name}</span>
                                                )}
                                            </td>
                                        </tr>
                                        <tr class="popup-row">
                                            <td><label for="textName" class="input-lbl">Content:</label></td>
                                            <td>
                                                {isEditing ? (
                                                    <input type="text" value={selectedText.content} onChange={e => {
                                                        const updatedText = { ...selectedText, content: e.target.value };
                                                        this.setState({ selectedText: updatedText });
                                                    }}
                                                    />
                                                ) : (
                                                    <span>{selectedText.content}</span>
                                                )}
                                            </td>
                                        </tr>
                                        <tr class="popup-row">
                                            <td><label for="textDate" class="input-lbl">CreateAt:</label></td>
                                            <td>
                                                {isEditing ? (
                                                    <input type="text" value={selectedText.createAt} onChange={e => {
                                                        const updatedText = { ...selectedText, createAt: e.target.value };
                                                        this.setState({ selectedText: updatedText });
                                                    }}
                                                    />
                                                ) : (
                                                    <span>{selectedText.createAt}</span>
                                                )}
                                            </td>
                                        </tr>
                                        <tr class="popup-row">
                                            <td><label for="textDate" class="input-lbl">UpdateAt:</label></td>
                                            <td>
                                                {isEditing ? (
                                                    <input type="text" value={selectedText.updateAt} onChange={e => {
                                                        const updatedText = { ...selectedText, updateAt: e.target.value };
                                                        this.setState({ selectedText: updatedText });
                                                    }}
                                                    />
                                                ) : (
                                                    <span>{selectedText.updateAt}</span>
                                                )}
                                            </td>
                                        </tr>
                                        
                                    </table>
                                </div>
                                <div class="popup-footer">
                                    <div class="popup-buttons">
                                        {isEditing ? (
                                            <div>
                                                <button id="okButton" class="btn btn-ok" onClick={this.handleSaveChanges}>Lưu</button>
                                                <button id="okButton" class="btn btn-cancel" onClick={this.handleCloseModal}>Đóng</button>
                                            </div>
                                        ) : (
                                            <button id="okButton" class="btn btn-cancel" onClick={this.handleCloseModal}>Đóng</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>




                <Modal
                    isOpen={isRemove}
                    onRequestClose={this.handleCloseRemove}
                    contentLabel="Delete Confirmation Modal"
                >
                    {selectedText && (
                        <div class="main">
                        <div id="deletePopup" class="popup">
                            <div class="popup-child popup-title">
                                <h3>Xóa Transcript</h3>
                            </div>
                            <div class="popup-child popup-content">
                                <div class="popup-row confirm-title">
                                    <p>Xác nhận xóa?</p>
                                </div>
                                <div class="popup-row confirm-body">
                                    <p>
                                        ID:
                                        <span> {selectedText.id}</span>
                                        </p>
                                        <p>
                                        Nội dung:
                                        <span> {selectedText.content}</span>
                                        </p>
                                        <p>
                                        Ngày tạo:
                                        <span> {selectedText.createAt}</span>
                                    </p>
                                </div>
                            </div>
                            <div class="popup-child popup-footer">
                                <div class="popup-child popup-buttons">
                                <button onClick={this.handleConfirmDelete}>Xác nhận</button>
                                <button onClick={this.handleCloseRemove}>Hủy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </Modal>

            </div>
        );
    }
}

export default Wallet;
