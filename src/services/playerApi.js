// This file will later fetch data from MongoDB backend

export async function getPlayers() {
  // TEMP MOCK DATA (replace with fetch later)
  return [
    {
      id: "P1",
      name: "Arjun Kumar",
      role: "Batsman",
      batting: "Right Hand",
      bowling: "Medium",
      status: "UNSOLD",
      soldAmount: 0,
      team: null
    },
    {
      id: "P2",
      name: "Rohith R",
      role: "All-rounder",
      batting: "Left Hand",
      bowling: "Spin",
      status: "SOLD",
      soldAmount: 15000,
      team: "Phoenix"
    },
    {
      id: "P3",
      name: "Ashitha Reddy",
      role: "Bowler",
      batting: "Right Hand",
      bowling: "Fast",
      status: "UNSOLD",
      soldAmount: 0,
      team: null
    }
  ];
}
