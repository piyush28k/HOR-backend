import profileModel from "../model/profile.model.js";

export const getProfile = async (req, res) => {
  try {
    const { userId } = req.body; // Destructure userId from the request body

    if (!userId) {
      return res.status(400).json({ msg: "User ID is required" });
    }

    const profile = await profileModel.findOne({ userId });

    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }

    res.json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

export const allProfiles = async (req, res) => {
  try {
    const profiles = await profileModel.find();
    res.json(profiles);
  } catch (error) {
    console.error("Error fetching profiles:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { userId, name, photo, title, location, bio, languages, skills, Experience, education, certifications } = req.body;

    if (!userId) {
      return res.status(400).json({ msg: "User ID is required" });
    }

    const updatedProfile = await profileModel.findOneAndUpdate(
      { userId },
      { name, photo, title, location, bio, languages, skills, Experience, education, certifications },
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ msg: "Profile not found" });
    }

    res.json(updatedProfile);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ msg: "Server error" });
  }
}
