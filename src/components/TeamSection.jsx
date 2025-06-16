const TeamMemberCard = ({ name, title, description, imageUrl, extraRoles=[] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm w-full hover:scale-102 hover:(shadow-2xl shadow-gray-500 )">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="object-cover h-full w-full" />
        ) : (
          <span className="text-gray-500 text-sm">Image goes here</span>
        )}
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-indigo-600 font-medium mb-2">{title}</p>
        <p className="text-gray-700 text-sm">{description}</p>
         {extraRoles.length > 0 && (
          <div className="space-y-2">
            {extraRoles.map((role, index) => (
              <div key={index}>
                <p className="text-sm font-semibold text-indigo-600">{role.title}</p>
                <p className="text-gray-700 text-sm">{role.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Jerry Adonai",
    title: "Founder & Chairman",
    description:
      "A visionary strategist and economist, Jerry leads PAAB Capital with divine alignment, bold leadership, and a mandate to transform nations through kingdom finance.",
    imageUrl: "",
  },
  {
    name: "Stephen Muyinza",
    title: "Chief Investment Officer (CIO)",
    description:
      "Oversees global investment portfolios and risk strategies with deep financial acumen and prophetic insight.",
    extraRoles: [
      {
        title: "Director, Advisory & Strategy",
        description:
          "Leads our advisory arm, delivering actionable and spirit-led financial direction to clients across sectors.",
      },
      {
        title: "Head of Training & Education",
        description:
          "Equips clients through mentorship, courses, and financial literacy initiatives rooted in kingdom values.",
      },
    ],
    imageUrl: "",
  },
  {
    name: "Joshua Basilwango",
    title: "Director of Partnerships & Client Relations",
    description:
      "Builds and manages strategic alliances and partnerships that align with PAAB Capital’s wealth transfer mission.",
    imageUrl: "",
  },
];

const TeamSection = () => {
  return (
    <div className="flex flex-wrap gap-8 p-4">
      {teamMembers.map((member, index) => (
        <TeamMemberCard
          key={index}
          name={member.name}
          title={member.title}
          description={member.description}
          imageUrl={member.imageUrl}
          extraRoles = {member.extraRoles}
        />
      ))}
    </div>
  );
};

export default TeamSection;