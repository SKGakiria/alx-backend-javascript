import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return Array.from([19, 20, 34], (size) => new ClassRoom(size));
}
