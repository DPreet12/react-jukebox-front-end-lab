const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/music`;

const index = async() => {

    try {
        
        const res = await fetch(BASE_URL);
        return res.json();
    } catch (error) {
        console.log("error", error);
    }
};

const create = async (formData) => {
    try {
        const res = await fetch(BASE_URL, {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        return res.json();
    } catch (error) {
        console.log("error", error);
    }
}


const update = async(formData, petId) => {
    try {
        const res = await fetch(`${BASE_URL}/${petId}`, {

            method:"PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        });
        return res.json();
    } catch (error) {
        console.log("error", error);
    }
};

const deleteMusic = async (musicId) => {
    try {
        const res = await fetch(`${BASE_URL}/${musicId}`, {
            method: "DELETE",
        });
        if (!res.ok) {
            throw new Error(`Failed to delete pet with ID ${musicId}`);
        }
        return await res.json(); // Optional: depending on what your backend returns
    } catch (error) {
        console.log("error", error);
        throw error; // Re-throw error for handling in the calling function
    }
};

export { index, create, update, deleteMusic };