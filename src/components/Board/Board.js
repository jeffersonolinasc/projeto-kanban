import React, { useState } from 'react'
import { MoreHorizontal } from "react-feather";
import Card from '../Card/Card';
import Dropdown from '../Dropdown/Dropdown';
import "./Board.css";

export default function Board() {

    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className="board">
            <div className="board_header">
                <p className="board_header_title">
                    Meu titulo
                </p>
                <div
                    className="board_header_title_more"

                    onClick={() => setShowDropdown(true)}
                >
                    <MoreHorizontal />
                    {showDropdown && (
                        <Dropdown
                            onClose={() => setShowDropdown(false)}
                        >
                            <p>Excluir quadro</p>
                        </Dropdown>
                    )}
                </div>
            </div>

            <div className="board_cards custom_scroll">
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    )
}
