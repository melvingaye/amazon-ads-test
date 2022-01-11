export default class CampaignProcessor {
  constructor(private createCampaignTopic = '') {}

  public groupCampaigns(campaigns: []) {
    //reduce campaigns by types
    return campaigns.reduce((campaignGroups: any, campaign: any) => {
      if (!campaignGroups[campaign.type]) {
        campaignGroups[campaign.type] = [];
      }

      campaignGroups[campaign.type].push(campaign);
      return campaignGroups;
    }, {});
  }

  public async publishCampaigns(groupedCampaigns: any) {
    for (const entry of Object.entries(groupedCampaigns)) {
      // destructured array gives unknown/never type
      const [type, campaigns] = entry as any;
      if (!campaigns?.length) continue;

      await Promise.allSettled(
        campaigns.map((campaign) => {
          return publishMessage(this.createCampaignTopic, { campaign, type });
        }),
      );
    }
  }
}

// signature in the cloud lib, this function comes from gcpPubSub
async function publishMessage(topic: string, message: any) {}
