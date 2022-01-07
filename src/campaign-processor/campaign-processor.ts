export default class CampaignProcessor {
  private campaignCreatorQueue = '';
  private campaignCreatorFunction = '';

  constructor() {}

  public createCampaignTypeGroups(campaigns: []): { ['SponsoredBrand']: [] } {
    //reduce campaign types
    return { ['SponsoredBrand']: [] };
  }

  public async enqueueTasks(groupedCampaigns: any) {
    for (const [type, campaigns] of groupedCampaigns) {
      await Promise.allSettled(
        campaigns.map((campaign) => {
          return creatteHttpTask({}, this.campaignCreatorQueue, this.campaignCreatorFunction, { campaign, type });
        }),
      );
    }
  }
}

//signature in the cloud lib has 4 params, is async
function creatteHttpTask(gcpConfig: any, nameOfQueue: any, functionToTrigger: any, requestData: any) {}
