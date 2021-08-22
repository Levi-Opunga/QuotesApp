export class Quote {
  author! :string;
  quote! :string;
  created_by!:string;
  created_at!:number;
  down_vote: number=0;
  up_vote: number=0;
  title!: string;
}
