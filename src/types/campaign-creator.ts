export interface CampaignCreator {
  createCampaigns: () => void; // could also use this to create campaigns in batches
  createSingleCampaign: (campaign: any) => void; // every single create campaign will have to do a look up
}
