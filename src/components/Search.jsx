import React, { useState, useEffect, useRef } from "react";
import { apiSearch } from "../services/api";

function Search() {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [suggestion, setSuggestion] = useState([]);
    const debouncer = useRef(null);

    function handleInputChange(e) {
        setInput(e.target.value);
        if (debouncer.current) {
            clearTimeout(debouncer.current);
        }
        debouncer.current = setTimeout(() => {
            searchGames(e.target.value);
        }, 300);
    }

    async function searchGames(input) {
        input = input.trim();
        if (!input) {
            setSuggestion([]);
            return;
        }
        setLoading(true);
        try {
            const data = await apiSearch(input);
            setSuggestion(data.results);
            console.log(data.results);
        } catch (error) {
            console.log("error fetching search", error);
            setSuggestion([]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="relative w-full max-w-md mx-auto">
            {/* Search Input */}
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Search for games..."
                className="w-full p-2 border rounded-lg shadow-sm 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                bg-black text-white placeholder-gray-400 transition-all duration-200"
            />

            {/* Loading Spinner */}
            {loading && (
                <div className="absolute right-4 top-4">
                    <div className="animate-spin h-5 w-5 border-2 border-blue-500 rounded-full border-t-transparent"></div>
                </div>
            )}

            {/* Suggestions Dropdown */}
            {suggestion.length > 0 && (
                <div className="absolute left-0 mt-2 w-full bg-gray-900 rounded-lg shadow-lg border border-gray-700 z-50 max-h-60 overflow-y-auto">
                    {suggestion.map((game) => (
                        <div key={game.id} className="flex items-center p-2 hover:bg-gray-800 transition">
                            {/* Game Image */}
                            {game.background_image && (
                                <img
                                    src={game.background_image}
                                    alt={game.name}
                                    className="w-10 h-10 object-cover rounded"
                                />
                            )}
                            {/* Game Name */}
                            <h1 className="ml-3 text-sm text-white">
                                <a href={`/gamedetail/${game.id}`} className="hover:underline">
                                    {game.name}
                                </a>
                            </h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
