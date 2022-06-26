import { writable } from 'svelte/store';

const testData = writable({ student_name: "", student_grade: "", test_id: "", instructions: "", test_path: "" });

export default testData;

