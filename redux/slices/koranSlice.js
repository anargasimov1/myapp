import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAudios = createAsyncThunk("audio/fetchAudios", async () => {
    try {
        const res = await fetch("https://api.quran.com/api/v4/chapter_recitations/1");
        const data = await res.json();
        return data.audio_files;
    } catch (error) {
        console.log(error)
    }
});

export const fetchSurahList = createAsyncThunk("audio/fetchSurahList", async () => {
    try {
        const res = await fetch("https://api.quran.com/api/v4/chapters");
        const data = await res.json();
        return data.chapters;
    } catch (error) {
        console.log(error)
    }
});

export const fetchSurahs = createAsyncThunk("book/fetchSurah", async (num) => {
    try {
        const response = await fetch(`https://quranenc.com/api/v1/translation/sura/azeri_musayev/${num}`);
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.log(error)
    }
})



const kuranSlice = createSlice({
    name: "audio",
    initialState: {
        sounds: [],
        surahList: [],
        surah: [],
        status: "idle",
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // surelerin audio fayllari

            .addCase(fetchAudios.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAudios.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.sounds = action.payload;
            })
            .addCase(fetchAudios.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            // surelerin siyahisini getirir

            .addCase(fetchSurahList.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSurahList.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.surahList = action.payload;
            })
            .addCase(fetchSurahList.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            //surenin mezmunu getirir hem erebce hem azeri

            .addCase(fetchSurahs.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSurahs.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.surah = action.payload;
            })
            .addCase(fetchSurahs.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default kuranSlice.reducer;
