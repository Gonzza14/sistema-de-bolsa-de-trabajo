import { useState } from "react";

export const useSearch = () => {

    const [search, setSearch] = useState("");

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    return {search, searcher, setSearch}
}
