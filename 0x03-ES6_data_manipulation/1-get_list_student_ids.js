/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Blessing Joy Oni <https://github.com/Onibless>
 * @returns
 */
export default function getListStudentIds(students){
	if (students instanceof Array){
		return map.students((student) => student.id);
	}
	return[];
}