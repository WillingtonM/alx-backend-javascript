/* eslint-disable */
import ClassRoom from './0-classroom';

/**
 * Creates array of {ClassRoom}s with specific size.
 * @returns array {@link ClassRoom}.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
